export default async function fileSave(fileName: string, data: any) {
    try {
        await window.electronAPI.fileSave(fileName, data);
    } catch (error) {
        console.error("Error saving data:", error);
    }
}
