
const DisplayEntries = (props) => {
    return (  
        <table>
            <thread>
            <tr>
                <th>Entry Number</th>
                <th>weight</th>
                <th>date</th>
            </tr>
            </thread>
            <tbody>
            {props.parentsEntries.map((entry, index) => {
                return (
                <tr>
                    <td>{index + 1}</td>
                    <td>{entry.weight}</td>
                    <td>{entry.date}</td>
                </tr>
                );
            })}
            </tbody>
        </table>
    );
}
 
export default DisplayEntries;