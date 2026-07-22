import Link from "next/link"

const NotFound = () => {
    return (
        <div>
            <h2>Not Found</h2>
            <p>Could not find requwested resource</p>
            <Link href='/'></Link>
        </div>
    )
}
