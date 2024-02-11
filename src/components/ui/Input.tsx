import { clsx } from 'clsx'
import { HTMLProps, forwardRef } from 'react'

type Props = {
    error?: boolean;
    helperText?: string;
} & HTMLProps<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, Props>(({ error = false, helperText, ...rest }, ref) => {
    const { className } = rest

    return (
        <div className="relative">
            <input
                ref={ref}
                type="text"
                {...rest}
                className={clsx(
                    className,
                    "outline-none placeholder:text-gray px-4 py-3 rounded-xl border-2",
                    error ? "border-red" : "border-transparent",
                    {
                        "placeholder:text-red/50": error,
                    },
                )}
            />
            {
                error && (
                    <div id={rest['aria-describedby']} className="absolute left-0 -bottom-7">
                        <p className="text-sm text-red">{ helperText }</p>
                    </div>
                )
            }
        </div>
    )
})

Input.displayName = "Input"