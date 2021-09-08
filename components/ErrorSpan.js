import { Typography } from "antd";
const { Text } = Typography;
const ErrorSpan = ({ text }) => {
    return (
        <Text style={{ paddingLeft: 15 }} type="danger">
            {text}
        </Text>
    );
};
export default ErrorSpan;
