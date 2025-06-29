import stylesComponents from "../../styles/stylesComponents";

export default function HeadLine({children}){
    return (
        <h1 className={stylesComponents.headlines.secondaryHeaderWhite}>{ children }</h1>
    );
}