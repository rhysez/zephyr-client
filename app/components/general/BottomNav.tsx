import Link from "next/link"

export default function BottomNav() {
    // bottom navigation bar
    // includes the following buttons:
    // Chats
    // Friends
    // You
    // ???

    return (
        <nav className="btm-nav font-bold dark:bg-dark_4 bg-light_2 text-dark_1 dark:text-light_1">
            <Link href='/dashboard'><button>Chats</button></Link>
            <Link href='/dashboard/friends'><button>Friends</button></Link>
            <Link href='/dashboard/groups'><button>Groups</button></Link>
            <Link href='/dashboard/profile'><button>Profile</button></Link>
        </nav>
    )
}