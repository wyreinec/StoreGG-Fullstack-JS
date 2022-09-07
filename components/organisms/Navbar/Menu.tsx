import React from 'react'
import cx from 'Classnames'
import Link from 'next/link'

interface MenuProps{
    // title? = tanda tanya artinya tidak wajib
    title: string;
    active?: boolean;
    href: string;
}

export default function Menu(props: Partial<MenuProps>) {
    //definisikan dulu di interface
    const {title, active, href = '/'} = props
    const classTitle = cx({
        'nav-link' : true,
        'active': active,
    })
    return (
        <li className="nav-item my-auto">
            <Link href={href}>
                <a className={classTitle} aria-current="page">{title}</a>
            </Link>
        </li>
    )
}
