const extractNames = (collection = [] as { name:string }[]) => {
    return collection.map((element) => element.name);
}

export default extractNames;