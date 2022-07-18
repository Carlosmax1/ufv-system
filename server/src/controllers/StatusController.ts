export function status({req, res}: any) {
    res.json(
        {
            api_status: 'OK',
            dev: 'Carlos'
        }
    )
}