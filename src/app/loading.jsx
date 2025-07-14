export default function Loading() {
  return (
    <div style={styles.loadingContainer}>
      <div style={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
}

const styles = {
  loadingContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    color: "#333",
    backgroundColor: "#fdfdfd",
  },
  spinner: {
    width: "60px",
    height: "60px",
    border: "6px solid #eee",
    borderTop: "6px solid #3498db",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    marginBottom: "20px",
  },
};
