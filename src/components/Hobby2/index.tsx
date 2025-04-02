import popcorn from "./popcorn.jpg"
import List2 from "./List2.tsx";
import Table2 from "./Table2.tsx";
import Form2 from "./Form2.tsx";

export default function Hobby2() {
    return (
        <>
            <h2>Ben: Movies</h2>
            <img src={popcorn} alt="popcorn.jpg" />
            <p>My favorite hobby is watching Movies! I'm intrigued by all different genres (except horror) and love to
                not only watch them from an entertainment standpoint but also for an analytical standpoint.
                As I mentioned above, I've taken two films class here at college, and I'm excited for my HUA seminar in
                C-term next year which is about cinema!</p>
            <List2 />
            <Table2 />
            <Form2 />
        </>
    )
}