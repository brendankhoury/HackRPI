import psycopg2 as psyc
import os



def db_conn():
  conn = psyc.connect(
    user = "publicuser",
    password = "000000000000",
    host = 'bouncy-panda-64c.gcp-northamerica-northeast1.cockroachlabs.cloud',
    port = 26257,
    database = "cpcoordinator",
    sslmode = "verify-full",
    sslrootcert = certs_path
  )

if __name__ == "__main__":
  certs_path = os.getcwd() + "/certs/bouncy-panda-ca.crt"
  print(certs_path)
  db_conn()