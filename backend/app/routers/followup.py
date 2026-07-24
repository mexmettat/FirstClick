from typing import Annotated

from fastapi import APIRouter, Depends

from app.auth import AuthUser, get_current_user
from app.schemas.analysis import FollowupRequest, FollowupResponse
from app.services.insights import answer_followup

router = APIRouter(prefix="/followup", tags=["followup"])


@router.post("", response_model=FollowupResponse)
async def persona_followup(
    body: FollowupRequest,
    user: Annotated[AuthUser, Depends(get_current_user)],
) -> FollowupResponse:
    return await answer_followup(user_id=user.id, body=body)
