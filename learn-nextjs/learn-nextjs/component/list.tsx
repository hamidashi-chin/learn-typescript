'use client'
import { Film } from "@/app/page"
import { FC } from "react"


const List: FC<{films: Film[]}> = ({films}) => {
    return(
        <ul>
            {films.map((film) => <li key={film.id} onClick={() => console.log('hogehoge')}>{film.title}</li>)}
        </ul>
    )
}

export {List}
