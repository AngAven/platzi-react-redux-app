import {Card} from 'antd'
import Meta from "antd/es/card/Meta.js";
import {StarOutlined} from "@ant-design/icons";

const PokemonCard = ({title, cover, description}) => {
    return (
        <Card
            title={title}
            cover={<img alt="Pokemon cover" src={cover} />}
            extra={<StarOutlined/>}
        >
            <Meta
                description={description}
            />
        </Card>
    );
};

export {PokemonCard}