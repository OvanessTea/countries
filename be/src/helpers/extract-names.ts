const extractNames = (collection = [] as { name: { common: string } }[]) => {
    return collection.map((element) => element.name.common);
}

export default extractNames;