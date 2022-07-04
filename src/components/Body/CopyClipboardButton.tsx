import { ContentCopy as ContentCopyIcon } from '@mui/icons-material'
import { IconButton } from '@mui/material'

interface Props {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const CopyClipboardButton = ({ onClick }: Props) => {
    return (
        <div
            style={{
                marginTop: 6,
                padding: 2,
                paddingTop: 6,
                borderRadius: 5,
                display: 'inline',
            }}
        >
            <IconButton
                onClick={onClick}
                color='inherit'
                size='small'
                sx={{ transform: 'scaleX(-1) scale(0.8)' }}
            >
                <ContentCopyIcon />
            </IconButton>
        </div>
    )
}
