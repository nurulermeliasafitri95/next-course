import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }) {
    const user = await prisma.user.findUnique({
        where: { id: params.id }
    })
    //if not found, return 404 error
    if (!user)
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    //else return data
    return NextResponse.json(user);
}

//PUT: updating/replacing a data
export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }) {
    //validate the request body
    const body = await request.json();
    const validation = schema.safeParse(body);
    //if invalid return 404 error
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });

    const user = await prisma.user.findUnique({
        where: { id: params.id }
    })

    //if doesn;t exist, retun 404
    if (!user)
        return NextResponse.json({ error: 'User not found' }, { status: 404 });

    const updatedUser = await prisma.user.update({
        where: {id: user.id },
        data: {
            name: body.name,
            email: body.email
        }
    })
    return NextResponse.json(updatedUser);
    //update the user
    //return the updated user
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    //Fetch user from db
    const user = await prisma.user.findUnique({
        where: { id: params.id }
    })
    //if not found, return 404
    if (!user)
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    //return 200
    await prisma.user.delete({
        where: { id: user.id }
    })
    //Delete user
    return NextResponse.json({});
}

