import StatTable from "../StatTable";
import { SKILL_STR, SKILL_TITLE } from "./constants";

const Skills = ({ str, agi, int }: SkillsProps) => {
  return (
    <>
      <StatTable data={SKILL_TITLE} value={-1} />
      <StatTable data={SKILL_STR} value={str}>
        STR:
      </StatTable>
      <StatTable data={SKILL_STR} value={agi}>
        AGI:
      </StatTable>
      <StatTable data={SKILL_STR} value={int}>
        INT:
      </StatTable>
    </>
  );
};

export default Skills;

interface SkillsProps {
  str: number;
  agi: number;
  int: number;
}
