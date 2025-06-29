import stylesComponents from "../../styles/stylesComponents";

export default function HeadLine({children}){
    return (
        <h2 className={stylesComponents.headlines.secondaryHeaderWhite}>{ children }</h2>
    );
}