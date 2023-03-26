export const fetchAllExternal = async <T = unknown>(path: string, replace?: string) => {
    const allData = import.meta.glob('/src/lib/data/*/*.json');
    const files = Object.entries(allData);

    const allItems = await Promise.all(
        files
        .filter(([filePath]) => {
            return filePath.startsWith(`/src/lib/data/${path}/`);
        })
        .map(async ([filePath, resolver]) => {
            const data = await resolver();
            const item = filePath.slice(13, -5);
            const name = item.slice(`/${path}/`.length);
            return {
                data: (data as {default: T}).default,
                path: replace ? `/${replace}/${name}` : item,
                name
            };
        })
    );

    return allItems;
}