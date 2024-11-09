import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <Card data-aos="zoom-in" className={styles.card}>
      <CardHeader>
        <CardTitle className={styles["card-title"]}>Contact</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className={`${styles["map-container"]} lg:w-2/3 md:w-1/2`}>
            <iframe
              className={styles.map}
              frameBorder={0}
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.380657233492!2d67.02340577406753!3d24.85084544564473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e75a28531d1%3A0x412558657f5ff4a8!2sGovernor%20House%20Karachi!5e0!3m2!1sen!2s!4v1731172774346!5m2!1sen!2s"
            />
            <div className={styles["info-box"]}>
              <div className="lg:w-1/2 px-6">
                <h2 className={styles["info-title"]}>ADDRESS</h2>
                <p className="mt-1">Karachi Division, Sindh, Pakistan</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className={styles["info-title"]}>EMAIL</h2>
                <a className="text-blue-500 leading-relaxed">
                  khaskhelisaqib@email.com
                </a>
                <h2 className={`${styles["info-title"]} mt-4`}>PHONE</h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <div className="relative mb-4">
              <label htmlFor="name" className={styles["info-title"]}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.input}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className={styles["info-title"]}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className={styles["info-title"]}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                defaultValue={""}
              />
            </div>
            <Button>Send</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Contact;
