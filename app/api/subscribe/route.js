import axios from 'axios';
import { NextResponse } from 'next/server';


export async function POST(req, res) {
    try {
        const body = await req.json();
        const { email, firstName } = body;

        const postData = JSON.stringify({
            api_key: process.env.EMAILOCTOPUS_API_KEY,
            email_address: email,
            fields: {
                FirstName: firstName,
            },
            tags: ['vip'],
            status: 'SUBSCRIBED',
        });

        const options = {
            hostname: 'emailoctopus.com',
            port: 443,
            path: `/api/1.6/lists/fc2a5f92-326e-11ef-ab7b-13b88162e27b/contacts`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        // const request = https.request(options, (response) => {
        //     let responseData = '';

        //     response.on('data', (chunk) => {
        //         responseData += chunk;
        //     });

        //     response.on('end', () => {
        //         const parsedData = JSON.parse(responseData);

        //         if (parsedData.error) {
        //             console.error('API Error:', parsedData.error);
        //             return res.status(400).json({ error: parsedData.error.message });
        //         }

        //         return res.status(201).json(parsedData);
        //     });
        // });

        // request.on('error', (error) => {
        //     console.error('API Request Error:', error);
        //     return res.status(500).json({ error: 'Internal Server Error' });
        // });

        // request.write(postData);
        // request.end();


        // use NextResponse get the response from the API and use axios to make the request

        const response = await axios.post(`https://emailoctopus.com/api/1.6/lists/fc2a5f92-326e-11ef-ab7b-13b88162e27b/contacts`, postData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return NextResponse.json(response.data);









    } catch (error) {
        console.error('API Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
