export default function Layout({
    children,
    analytic,
    team
}: {
    children:React.ReactNode;
    analytic:React.ReactNode;
    team:React.ReactNode
})
{
    return (
        <div>
            {children}
            {analytic}
            {team}
        </div>
    )
}