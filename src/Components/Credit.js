import { useGlobalContext } from "../Context";

const Credit = () => {
    const {closeNavBar} = useGlobalContext()

    return (
        <section id="credit" onClick={closeNavBar}>
            <p>Designed by Pavan MG</p>
            <a href="https://www.figma.com/file/UdJYaSOzWwafawAsSeTqWi/Developer-Portfolio-Design-(Community)?type=design&node-id=0-1&mode=design&t=FKHDRvWXIYGI2wul-0" target="_blank" rel="noreferrer">
                design link
            </a>
        </section>
    )
}

export default Credit