from flask import Flask, jsonify, request

app = Flask(__name__)
appointments = []

@app.route("/")
def home():
    return "Mini Hospital Backend Running!"

@app.route("/appointments", methods=["GET"])
def get_appointments():
    return jsonify(appointments)

@app.route("/appointments/<int:appointment_id>", methods=["GET"])
def get_appointment_by_id(appointment_id):
    for appt in appointments:
        if appt["id"] == appointment_id:
            return jsonify(appt)
    return jsonify({"error": "Appointment not found"}), 404

@app.route("/appointments", methods=["POST"])
def create_appointment():
    data = request.get_json()
    if not data or "patient_name" not in data or "date" not in data:
        return jsonify({"error": "Invalid data"}), 400
    appointment = {
        "id": len(appointments) + 1,
        "patient_name": data["patient_name"],
        "date": data["date"]
    }
    appointments.append(appointment)
    return jsonify(appointment), 201

@app.route("/appointments/<int:appointment_id>", methods=["DELETE"])
def delete_appointment(appointment_id):
    global appointments
    appointments = [appt for appt in appointments if appt["id"] != appointment_id]
    return jsonify({"message": "Appointment deleted"}), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
