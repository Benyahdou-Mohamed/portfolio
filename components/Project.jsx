'use client';
import React from 'react'
import Link from 'next/link'

export default function Project({index, title,link, setModal}) {

    return (
        <a href={link} target="_blank">
        <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className="project">
            <h2>{title}</h2>
            <p>Design & Development</p>
        </div>
        </a>
    )
}