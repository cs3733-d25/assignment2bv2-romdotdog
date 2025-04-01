export default function Intro({ name1, name2 }: { name1: string, name2: string }) {
    return <>
        <p>Hi! Our names are {name1} and {name2}.</p> 
        <p>{name1} is a freshman WPI student who is majoring in computer science and occasionally reads philosophy in his free time. He attended a philosophy class at WPI in A-term and deeply regretted it.</p>
        <p>{name2} is a sophomore WPI student who is majoring in computer science and often watches movies. He's attended two film classes at WPI and while he enjoyed them, they were very intense.</p>
    </>;
}