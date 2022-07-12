const CreateNavigation = () => {
    let m_navItems = [];

    const addItem = (item) => {
        m_navItems.push(item);
    }

    const getItems = () => m_navItems;

    return {addItem, getItems};
}



export default CreateNavigation;