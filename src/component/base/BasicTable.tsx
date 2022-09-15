import { FC } from "react";
import { BasicTableProps } from "../../shared/interface/table.interface";

export const BasicTable: FC<BasicTableProps<any>> = ({ dataSource, columns, children, ...porp }) => {

    return <>
        < table className="border-collapse table-auto w-full text-sm" >
            <thead>
                <tr>
                    {
                        columns.map((column, index) => {
                            return <td className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                                {column.label}
                            </td>
                        })
                    }
                </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-800">
                {dataSource.map((item, index) => {
                    return (
                        <tr>
                            {columns.map((col, colIdex) => {
                                const value = item[col.dataIndex]
                                return <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                                    {value}
                                </td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table >
    </>
}

