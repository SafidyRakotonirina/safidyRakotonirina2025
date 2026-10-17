import { Document, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { SITE, SOCIALS } from "../../config";
import {
  CV_EDUCATION,
  CV_EXPERIENCES,
  CV_INTERESTS,
  CV_LANGUAGES,
  CV_PROFILE,
  CV_SKILLS,
  CV_TITLE,
} from "../../data/cv";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9,
    color: "#334155",
    paddingBottom: 28,
  },
  header: {
    backgroundColor: "#0f172a",
    paddingHorizontal: 32,
    paddingVertical: 24,
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: "#ffffff",
  },
  nameAccent: { color: "#60a5fa" },
  title: { fontSize: 11, color: "#93c5fd", marginTop: 3 },
  contacts: { flexDirection: "row", flexWrap: "wrap", marginTop: 14 },
  contactCol: { width: "50%", marginBottom: 4 },
  contactLabel: { color: "#94a3b8", fontSize: 8 },
  contactValue: { color: "#e2e8f0", fontSize: 8.5 },
  body: { flexDirection: "row", paddingHorizontal: 32, paddingTop: 20 },
  main: { width: "66%", paddingRight: 18 },
  sidebar: { width: "34%" },
  section: { marginBottom: 16 },
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#0f172a",
    borderBottomWidth: 1.5,
    borderBottomColor: "#3b82f6",
    paddingBottom: 3,
    marginBottom: 8,
  },
  paragraph: { color: "#475569", lineHeight: 1.5 },
  expItem: {
    marginBottom: 10,
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderLeftColor: "#e2e8f0",
  },
  expHeader: { flexDirection: "row", justifyContent: "space-between" },
  expTitle: { fontFamily: "Helvetica-Bold", color: "#0f172a", fontSize: 9.5 },
  expCompany: { color: "#2563eb" },
  expPeriod: { fontSize: 8, color: "#94a3b8" },
  expLocation: { fontSize: 8, color: "#94a3b8", marginBottom: 3 },
  bullet: { flexDirection: "row", marginTop: 2 },
  bulletDot: { color: "#3b82f6", width: 8, fontSize: 9 },
  bulletText: { flex: 1, color: "#475569", lineHeight: 1.4 },
  eduItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 7,
  },
  eduDegree: { fontFamily: "Helvetica-Bold", color: "#0f172a", fontSize: 9 },
  eduSchool: { fontSize: 8, color: "#64748b", marginTop: 1 },
  eduPeriod: { fontSize: 8, color: "#94a3b8" },
  skillLabel: {
    fontFamily: "Helvetica-Bold",
    color: "#0f172a",
    fontSize: 8.5,
    marginBottom: 1,
  },
  skillItems: { color: "#475569", fontSize: 8.5, marginBottom: 7 },
  langRow: { flexDirection: "row", flexWrap: "wrap" },
  langChip: {
    color: "#1d4ed8",
    fontSize: 8.5,
    backgroundColor: "#eff6ff",
    borderWidth: 1,
    borderColor: "#dbeafe",
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 5,
    marginBottom: 5,
  },
  interest: { flexDirection: "row", marginBottom: 3 },
});

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <View style={styles.contactCol}>
      <Text style={styles.contactLabel}>{label}</Text>
      {href ? (
        <Link src={href} style={styles.contactValue}>
          {value}
        </Link>
      ) : (
        <Text style={styles.contactValue}>{value}</Text>
      )}
    </View>
  );
}

function SectionTitle({ children }: { children: string }) {
  return <Text style={styles.sectionTitle}>{children}</Text>;
}

export function CvDocument() {
  return (
    <Document
      title={`CV — Safidy Ny Aina Rakotonirina`}
      author="Safidy Ny Aina Rakotonirina"
      subject={CV_TITLE}
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>
            Safidy Ny Aina <Text style={styles.nameAccent}>Rakotonirina</Text>
          </Text>
          <Text style={styles.title}>{CV_TITLE}</Text>

          <View style={styles.contacts}>
            <ContactItem
              label="EMAIL"
              value={SITE.email}
              href={`mailto:${SITE.email}`}
            />
            <ContactItem label="TÉLÉPHONE" value={SITE.phone} />
            <ContactItem label="LOCALISATION" value={SITE.location} />
            <ContactItem label="PORTFOLIO" value="Portfolio" href={SITE.url} />
            {SOCIALS.github.href.trim() !== "" && (
              <ContactItem
                label="GITHUB"
                value="GitHub"
                href={SOCIALS.github.href}
              />
            )}
            {SOCIALS.linkedin.href.trim() !== "" && (
              <ContactItem
                label="LINKEDIN"
                value="LinkedIn"
                href={SOCIALS.linkedin.href}
              />
            )}
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.main}>
            <View style={styles.section}>
              <SectionTitle>Profil</SectionTitle>
              <Text style={styles.paragraph}>{CV_PROFILE}</Text>
            </View>

            <View style={styles.section}>
              <SectionTitle>Expérience professionnelle</SectionTitle>
              {CV_EXPERIENCES.map((experience) => (
                <View
                  key={`${experience.company}-${experience.period}`}
                  style={styles.expItem}
                  wrap={false}
                >
                  <View style={styles.expHeader}>
                    <Text style={styles.expTitle}>
                      {experience.title}{" "}
                      <Text style={styles.expCompany}>
                        — {experience.company}
                      </Text>
                    </Text>
                    <Text style={styles.expPeriod}>{experience.period}</Text>
                  </View>
                  {experience.location ? (
                    <Text style={styles.expLocation}>
                      {experience.location}
                    </Text>
                  ) : null}
                  {experience.bullets.map((bullet, index) => (
                    <View key={index} style={styles.bullet}>
                      <Text style={styles.bulletDot}>•</Text>
                      <Text style={styles.bulletText}>{bullet}</Text>
                    </View>
                  ))}
                </View>
              ))}
            </View>

            <View style={styles.section}>
              <SectionTitle>Formation</SectionTitle>
              {CV_EDUCATION.map((education, index) => (
                <View key={index} style={styles.eduItem}>
                  <View>
                    <Text style={styles.eduDegree}>{education.degree}</Text>
                    {(education.school || education.location) && (
                      <Text style={styles.eduSchool}>
                        {[education.school, education.location]
                          .filter(Boolean)
                          .join(" — ")}
                      </Text>
                    )}
                  </View>
                  <Text style={styles.eduPeriod}>{education.period}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.sidebar}>
            <View style={styles.section}>
              <SectionTitle>Compétences</SectionTitle>
              {CV_SKILLS.map((skill) => (
                <View key={skill.label}>
                  <Text style={styles.skillLabel}>{skill.label}</Text>
                  <Text style={styles.skillItems}>{skill.items}</Text>
                </View>
              ))}
            </View>

            <View style={styles.section}>
              <SectionTitle>Langues</SectionTitle>
              <View style={styles.langRow}>
                {CV_LANGUAGES.map((language) => (
                  <Text key={language} style={styles.langChip}>
                    {language}
                  </Text>
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <SectionTitle>Centres d'intérêt</SectionTitle>
              {CV_INTERESTS.map((interest) => (
                <View key={interest} style={styles.interest}>
                  <Text style={styles.bulletDot}>•</Text>
                  <Text style={styles.bulletText}>{interest}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
