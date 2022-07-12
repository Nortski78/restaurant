const CreateMenuItem = (itemName, activeStatus = false) => {

    let m_name = itemName;
    let m_activeStaus = activeStatus;

    const menuItem = document.createElement('button');
    menuItem.classList.add('menu-item');
    menuItem.textContent = m_name;

    if(activeStatus) { menuItem.classList.add('active'); }

    const getName = () => m_name;
    const getActiveStatus = () => m_activeStaus;
    const setName = (name) => m_name = name;
    const setActiveStatus = (status) => m_activeStaus = status;

    return {getName, getActiveStatus, setName, setActiveStatus};
}

export default CreateMenuItem;