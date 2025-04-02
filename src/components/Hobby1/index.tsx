import philosophyImage from "./DeleuzeGuattari.gif";
import Form1 from "./Form1";
import List1 from "./List1";
import Table1 from "./Table1";

export default function Hobby1() {
    return <>
        <h2>Roman: Poststructuralist Philosophy</h2>
        <img src={philosophyImage} alt="picture of Gilles Deleuze and Félix Guattari" />
        <p>I've been reading continental philosophy since senior year of high school. I first tried to read Derrida with surprising success, but I found that my true interest is in schizoanalysis and Marxian economics. I use the former to continuously assess and change my mental state and well-being, and I use the latter to gain a greater understanding of how the world imposes on and affects me and others.</p>
        <p>Here are some philosophers I like:</p>
        <List1 />
        <Table1 />
        <h3>Contact me!</h3>
        <Form1 />
    </>
}