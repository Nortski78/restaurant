const CreateMenuItem = (itemName, activeStatus = false) => {

    let m_name = itemName;

    const menuItem = document.createElement('button');
    menuItem.classList.add('menu-item');
    menuItem.textContent = m_name;

    if(activeStatus) { menuItem.classList.add('active'); }

    const getName = () => m_name;
    const getActiveStatus = () => activeStatus;
    const setName = (name) => m_name = name;

    return {getName, getActiveStatus, setName};
}

export default CreateMenuItem;