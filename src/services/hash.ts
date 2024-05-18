import crypto from 'crypto'

export function hashService(password:string) : string{
    const frontsalt=process.env.FRONTSALT
    const backsalt=process.env.BACKSALT
    const hash=crypto.createHash('sha256').update(`${frontsalt}${password}${backsalt}`).digest('hex')
    return hash
}