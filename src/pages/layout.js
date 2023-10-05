import Nav from "@/components/Nav";

export default function Layout({ children }) {
    return (
        <div className="layout h-screen bg-dark-teal">
            <Nav/>
            <main>{children}</main>
        </div>
    );
}