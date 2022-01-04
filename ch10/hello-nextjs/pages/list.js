import axios from "axios";
import Header from "../components/Header";

const List = (props) => (
    <div>
        <Header />
        <p>列表页面</p>
        <ul>
            {
                props.list.map((item) => {
                    return (
                        <li key={item}>
                            {item}
                        </li>
                    );
                })
            }
        </ul>
    </div>
);

List.getInitialProps = async () => {
    const res = await axios.get("http://api/items");
    return { list: res.data };
};

export default List;