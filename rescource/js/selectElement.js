const get = (selection) => {
    const m_element = document.querySelector(selection);
    if (m_element) {
        return m_element;
    }
    throw new error("error");
}
export default get;