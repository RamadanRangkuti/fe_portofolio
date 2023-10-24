import AuthLoading from "@/components/AuthLoading"
import jwt_decode from "jwt-decode"

const AuthContext = (children) => {
  // const token = localStorage.getItem("@token")
  // const decode = jwt_decode(token)
  // console.log(decode)
  // if(!token){
  //   console.log('harus login')
  //   window.location.href='/auth'
  //   return AuthLoading
  // }else{
  //   const decode = jwt_decode(token)
  //   if(!decode){
  //     console.log('token tidak valid')
  //     window.location.href='/auth'
  //   }else{
  //     return children
  //   }
  // }
  

 // Periksa jika kode berjalan di sisi klien
 if (typeof window !== 'undefined') {
  const token = localStorage.getItem("@token");

  if (!token || !isValidToken(token)) {
    console.log('Token tidak valid atau tidak ditemukan. Harus login.');
    window.location.href = '/auth';
    return <AuthLoading />;
    }
  }

return children;
}

// Fungsi untuk memeriksa validitas token
function isValidToken(token) {
  try {
    const decoded = jwt_decode(token);
    if (decoded.exp < Date.now() / 1000) {
      return false
    }
    return true
  } catch (error) {
    return false
  }
}

export default AuthContext