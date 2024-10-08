import { TableContainer, Paper, Table, TableBody, TableRow, TableCell } from '@mui/material';
import {useStoreContext} from "../../context/StoreContext.tsx";
import {currencyFormat} from "../../utils/util.ts";


export default function Summary() {
    const { basket } = useStoreContext();
    const subtotal = (basket?.items.reduce((sum, item) => sum + Math.round(parseFloat(item.price) * 100), 0) / 100).toFixed(1) ?? 0;
    const deliveryFee = subtotal > 500 ? 0 : 50;
    const totalWithFee = parseFloat(subtotal) + deliveryFee;

    return (
        <>
            <TableContainer component={Paper} variant={'outlined'}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">{currencyFormat(subtotal)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Delivery fee*</TableCell>
                            <TableCell align="right">{currencyFormat(deliveryFee)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="right">{currencyFormat(totalWithFee)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span style={{fontStyle: 'italic'}}>*Orders over ₪500 qualify for free delivery</span>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
