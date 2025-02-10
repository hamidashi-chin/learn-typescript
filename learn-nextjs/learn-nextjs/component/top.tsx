'use client'
import { Film } from "@/app/page"
import { FC, useEffect, useState } from "react"
import { useForm, SubmitHandler } from'react-hook-form';

type Inputs = {
    title: string,
    review: string,
  };
  

const Top: FC<{films: Film[]}> = ({films}) => {
    const [title, setTitle] = useState<string>('aaaaa');
    const {
        register,
        handleSubmit,
        watch,
        setValue
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const response = await fetch("/api/ghibli", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
    
        const result = await response.json();
        console.log(result);
    }

    const title2 = watch('title');

    useEffect(() => {
        console.log(title2)
    }, [title2])

    return(
        <div>
            <h1>{title}</h1>
            <ul>
                {films.map((film) => <li key={film.id} onClick={() => {
                    setTitle(film.title);
                    setValue('title', film.title);
                }}>{film.title}</li>)}
            </ul>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title")} /><br />
                <input {...register("review")} /><br />
                <input type="submit" />
            </form>
        </div>
    )
}

export {Top}
