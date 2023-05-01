//Imports
import React from "react";

//Component of the manage Settings page
export default function Settings() {
    return (
        <main>
            <p>Settings</p>
        </main>
    );
}
/*
//Imports
import React, { useMemo, useState } from "react";
const fs = window.require("fs");
const pathModule = window.require("path");

const { app } = window.require("@electron/remote");

//Component of the manage Settings page
export default function Settings() {
    const [path, setPath] = useState(app.getAppPath());

    function formatSize(size: number) {
        var i = Math.floor(Math.log(size) / Math.log(1024));
        return (
            (size / Math.pow(1024, i)).toFixed(2) +
            "" +
            ["B", "kB", "MB", "GB", "TB"][i]
        );
    }

    const files: any = useMemo(() => {
        fs.readdirSync(path)
            .map((file: string) => {
                const stats = fs.statSyc(pathModule.join(path, file));
                return {
                    name: file,
                    size: stats.isFile() ? formatSize(stats.size ?? 0) : null,
                    directory: stats.isDirectory(),
                };
            })
            .sort((a: any, b: any) => {
                if (a.directory === b.directory) {
                    return a.name.localeCompare(b.name);
                }
                return a.directory ? -1 : 1;
            });
    }, [path]);

    function onBack() {
        setPath(pathModule.dirname(path));
    }

    function onOpen(folder: string) {
        setPath(pathModule.join(path, folder));
    }

    const [searchString, setSearchString] = useState("");
    const filteredFiles = files.filter((s: any) =>
        s.name.startsWith(searchString)
    );

    return (
        <main>
            <p>{path}</p>
            <input
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
            />
            <Test files={filteredFiles} onBack={onBack} onOpen={onOpen} />
        </main>
    );
}

//Component of the manage Settings page
export function Test(props: any) {
    const { files, onBack, onOpen } = props;
    return (
        <table>
            <tbody>
                <tr onClick={onBack}>
                    <td></td>
                    <td>...</td>
                    <td></td>
                </tr>
                {files.map(({ name, directory, size }: any) => {
                    return (
                        <tr onClick={() => directory && onOpen(name)}>
                            <td>{directory}</td>
                            <td>{name}</td>
                            <td>{size}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
*/
