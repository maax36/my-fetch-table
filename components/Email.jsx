export function Email({email}) {
    return <a href={'mailto:' + email}>{email}</a>;
}