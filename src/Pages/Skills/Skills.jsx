import ProjectCardSkeleton from "../../components/common/projectCardSkeleton";
import ArrowIcon from "../../components/icons/downArrow";

export default function Skills() {
    return (
        <>
            <p>
                Welcome to your projects xDDDS
            </p>
            <ArrowIcon direction="LEFT"></ArrowIcon>
            <ArrowIcon direction="RIGHT"></ArrowIcon>
            <ProjectCardSkeleton/>
        </>
    );
  }