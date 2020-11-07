import psycopg2 as psyc

conn = psyc.connect(
  user = "publicuser",
  password = "000000000000",
  host = 'bouncy-panda-64c.gcp-northamerica-northeast1.cockroachlabs.cloud',
  port = 26257,
  database = "cpcoordinator",
  sslmode = "verify-full",
  sslrootcert = "/Users/kylechin/certs/bouncy-panda-ca.crt"
)