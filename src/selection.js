const select=(res,a,b)=>{
    return res.slice(a,b)
}
const setter=(res)=>{
    return [select(res,0,4),select(res,4,8),select(res,8,12),select(res,12,16)]
}
