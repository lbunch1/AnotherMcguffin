import Image from 'next/image';


export default function Social({ url, img }) {


    return (
        <a 
        className="h-14 w-14 bg-zinc-400 rounded-full text-2xl font-bold text-gray-900 hover:scale-125"
        href={url}>
            <Image src={img} height={60} width={60} />
            </a>
    )
}
