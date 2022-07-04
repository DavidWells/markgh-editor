import { Input, styled } from '@mui/material'
import { useAppSelector } from '../../store/hooks'

interface Props {
    title: string
    setTitle: React.Dispatch<React.SetStateAction<string>>
}

export const TitleInput = ({ title, setTitle }: Props) => {
    const theme = useAppSelector((state) => state.theme)

    const StyledInput = styled(Input)({
        '&:before': {
            borderBottom: '0px',
            transform: 'scaleX(0)',
            transition: 'transform 150ms ease-in-out',
        },
        '&:hover': {
            '&&:before': {
                transform: 'scaleX(1)',
                borderBottom: '2px solid gray',
            },
        },
    })

    //vars for theme control
    const themeColor = theme === 'dark' ? '#181414' : 'white'
    const textColor = theme === 'dark' ? 'white' : '#181414'

    return (
        <StyledInput
            type='text'
            placeholder='Untitled Document'
            value={title}
            onChange={(e) => {
                setTitle(e.target.value)
            }}
            style={{
                border: '0px',
                fontSize: '25px',
                width: '30%',
                backgroundColor: themeColor,
                color: textColor,
                marginLeft: 12,
            }}
        />
    )
}
