import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

//GET: Getting a data
export async function GET(request: NextRequest){
    const users = await prisma.user.findMany();
    //fetch users from db
    return NextResponse.json(users);

    //hardcoded data
    // return NextResponse.json([
    //     { id: 1, name: 'elia' },
    //     { id: 2, name: 'Mosh' }
    // ]);

}

//POST: Creating a data 
export async function POST(request: NextRequest){
    const body = await request.json();
    const validation = schema.safeParse(body);
    //Validate
    //if invalid return 404 nerror
    //else return data that was created
    if (!validation.success) 
        return NextResponse.json(validation.error.errors, { status: 404 });

        const user = await prisma.user.findUnique({
            where: { email: body.email }
        })

        if (user)
        return NextResponse.json({error: 'User already exist'}, {status: 200});

        const newUser = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email
            }
        })
        return NextResponse.json(newUser, {status: 200});
}

//PUT: updating/replacing a data
//PATCH: updating one or more properties

