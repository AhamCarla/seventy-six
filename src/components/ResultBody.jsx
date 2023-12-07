import './ResultBody.css'

export default function ResultBody(props) {
    return (
        <>
            <ul className="perklines">
                <li>⭐ {props.perks[0].description}</li>
                <li>⭐⭐ {props.perks[1].description}</li>
                <li>⭐⭐⭐ {props.perks[2].description}</li>
            </ul>
        </>
    );
}