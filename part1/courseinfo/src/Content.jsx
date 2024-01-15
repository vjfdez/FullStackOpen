import Part from "./contentComponents/Part";

const Content = (props) => {
    console.log(props.parts[2].name);

    return(
        <div>
            <Part part1={props.parts[0].name} exercises1={props.parts[0].exercises} />
            <Part part2={props.parts[1].name} exercises2={props.parts[1].exercises} />
            <Part part3={props.parts[2].name} exercises3={props.parts[2].exercises} />
        </div>
    )
};

export default Content;