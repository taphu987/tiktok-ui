import Button from "~/components/Button";

function MenuItems({ data }) {
    return (
        <Button leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
